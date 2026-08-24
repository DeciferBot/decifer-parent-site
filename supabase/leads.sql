-- DECIFER leads table. One queue for enquiries and early-access signups.
--
-- Apply once to the chosen Supabase project (SQL editor or supabase CLI).
-- RLS is enabled with NO policies on purpose: the anon and publishable keys
-- can do nothing. Only the service role key, used server-side in
-- src/lib/leads.ts, can read or write. There is no legitimate reason for a
-- browser to touch this table. Interrogate any policy added later.

create extension if not exists pgcrypto;

create table if not exists public.leads (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),

  -- what kind of lead
  kind             text not null
                   check (kind in ('discovery_call', 'project', 'general', 'early_access')),

  -- who
  name             text not null,
  email            text not null,
  company          text,
  based_in         text check (based_in is null or based_in in ('AE', 'GCC', 'SG', 'UK', 'other')),

  -- what they want
  service_key      text,          -- services.ts key, or 'not-sure'
  product_interest text,          -- products.ts interestValue, early_access only
  problem          text,          -- the free-text qualifier
  cost_today       text,          -- what the process costs today: the baseline
  systems          text,          -- systems involved, if the enquirer knows
  outcome          text,          -- what a successful outcome looks like
  timeline         text check (timeline is null or timeline in ('now', '1-3-months', '3-6-months', 'exploring')),
  budget_band      text check (budget_band is null or budget_band in
                     ('under-25k-aed', '25k-75k-aed', '75k-200k-aed', '200k-plus-aed', 'not-sure')),
  heard_via        text,

  -- provenance
  source_path      text,
  referrer         text,
  utm              jsonb,

  -- consent record (PDPL and GDPR both want one)
  consent          boolean not null default false,
  consent_text     text,

  -- pipeline: new -> contacted -> qualified -> audit -> proposal -> won | lost | disqualified
  status           text not null default 'new'
                   check (status in ('new', 'contacted', 'qualified', 'audit', 'proposal', 'won', 'lost', 'disqualified')),
  notes            text,

  -- abuse controls. ip_hash is a salted SHA-256, never the raw address.
  ip_hash          text,
  user_agent       text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_new_idx on public.leads (status) where status = 'new';
create index if not exists leads_kind_idx       on public.leads (kind);
create index if not exists leads_ip_hash_idx    on public.leads (ip_hash, created_at desc);

alter table public.leads enable row level security;
-- No policies. See header.
